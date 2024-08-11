interface Props {
  params: {
    ID: string
  }
}

export default function PreviewPage({ params: { ID } }: Props) {
  return (
    <section className="grid grid-cols-5 bg-red-100 w-full">
      <section className="col-span-4 flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <h2 className="text-xl">Preview name {ID}</h2>
          <footer className="flex gap-4 items-center">
            <picture className="size-16 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </picture>
            <p>previews author</p>
          </footer>
        </header>
        <picture className="">
          <video className="" src=""></video>
        </picture>
      </section>
      <section className="bg-green-500">
        other previews version
      </section>
    </section>
  )
}
