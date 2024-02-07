export default function NoteCard() {
    return (
        <article className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
                Há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere tempora aperiam saepe obcaecati aliquid harum illum voluptas in veniam odio repudiandae assumenda, mollitia voluptate, a dolores, fugiat officia debitis odit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis perferendis fugiat illo architecto aliquam nostrum eum nulla explicabo quisquam, molestiae veniam cum iusto eligendi tenetur corporis officia necessitatibus! Aspernatur, sunt.
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </article>
    )
}