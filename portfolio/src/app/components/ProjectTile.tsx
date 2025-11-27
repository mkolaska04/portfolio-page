import Image from 'next/image';
type Project = {
    title: string;
    description: string;
    links: { name: string; url: string }[];
    imageSrc?: string;
};

export default function ProjectTile({ project }: { project: Project }) {
    return (
        <div className=" max-w-sm w-fit bg-box rounded-lg shadow-md p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-[#EF6FDE]">{project.title}</h2>
                <Image
                    src={project.imageSrc || "/cat-placeholder.jpg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg my-4"
            
            />
            <p className="w-[300px] ">{project.description}</p>
            <div className="flex space-x-4 mt-4">
                {project.links.map((link: { name: string; url: string }) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#EF6FDE] hover:text-[#84D3FF]">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}