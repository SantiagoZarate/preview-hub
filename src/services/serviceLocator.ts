import { MediaRepository } from "../repositories/MediaRepository"
import { PreviewRepository } from "../repositories/PreviewRepository"
import { ProjectRepository } from "../repositories/ProjectRepository"
import { AuthService } from "./AuthService"
import { MediaService } from "./MediaService"
import { PreviewService } from "./previewService"
import { ProjectService } from "./ProjectService"

interface MapServices {
  projectService: ProjectService
  previewService: PreviewService,
  authService: AuthService,
  mediaService: MediaService
}

interface MapRepositories {
  previewRepository: PreviewRepository,
  projectRepository: ProjectRepository,
  mediaRepository: MediaRepository
}

export class ServiceLocator {
  private static _serviceCache: Partial<MapServices> = {}
  private static _repositoryCache: Partial<MapRepositories> = {}

  private static _serviceFactory: {
    [K in keyof MapServices]: () => MapServices[K];
  } = {
      previewService: () => {
        const previewRepository = this.getOrCreateRepository("previewRepository")
        return new PreviewService(previewRepository)
      },
      authService: () => {
        return new AuthService()
      },
      projectService: () => {
        const projectRepository = this.getOrCreateRepository("projectRepository");
        return new ProjectService(projectRepository);
      },
      mediaService: () => {
        const mediaRepository = this.getOrCreateRepository("mediaRepository")
        return new MediaService(mediaRepository);
      }
    }

  private static _repositoryFactory: { [K in keyof MapRepositories]: () => MapRepositories[K] } = {
    previewRepository: () => new PreviewRepository(),
    projectRepository: () => new ProjectRepository(),
    mediaRepository: () => new MediaRepository()
  };

  private static getOrCreateRepository<K extends keyof MapRepositories>(
    key: K,
  ): MapRepositories[K] {
    const repo = this._repositoryCache[key];
    if (repo) {
      console.log('RETURNING CACHED ' + key);
      return repo;
    }

    const newRepo = this._repositoryFactory[key]();
    this._repositoryCache[key] = newRepo;
    return newRepo;
  }

  static getService<K extends keyof MapServices>(key: K): MapServices[K] {
    const svc = this._serviceCache[key]

    if (svc) {
      return svc
    }

    const newService = this._serviceFactory[key]();
    this._serviceCache[key] = newService;
    return newService
  }
}