// import Image from 'next/image';
// import { Project } from '@/types/category';
// import { Card, CardContent, CardFooter } from './Card';
// import { ExternalLink } from 'lucide-react';

// interface ProjectCardProps {
//   project: Project;
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden group">
//       <CardContent className="p-0 relative">
//         <div className="relative h-48 w-full">
//           <Image
//             src={project.imageUrl}
//             alt={project.title}
//             fill
//             className="object-cover transition-transform group-hover:scale-100 rounded-2xl"
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl object-cover transition-transform group-hover:scale-100 hover:duration-150 ease-in-out">
//           <a
//             href={project.link}
//             className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4"
//             target="_blank"
//             rel=""
//           >
//             View Project <ExternalLink size={16} />
//           </a>
//         </div>
//       </CardContent>
//       <CardFooter className="flex flex-col items-start gap-1 pt-2">
//         <h3 className="font-ubuntubold">{project.title}</h3>
//         <p className="text-sm text-muted-foreground">{project.description}</p>
//       </CardFooter>
//     </Card>
//   );
// }

import Image from 'next/image';
import { Project } from '@/types/category';
import { Card, CardContent, CardFooter } from './Card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group shadow-lg">
      <CardContent className="p-0 relative">
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-100 rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl object-cover transition-transform group-hover:scale-100 hover:duration-150 ease-in-out">
          <a
            href={project.link}
            className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4"
            target="_blank"
            rel=""
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 pt-2">
        <h3 className="font-ubuntubold">{project.title}</h3>
        <p
          className="text-sm text-muted-foreground line-clamp-2"
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {project.description}
        </p>
      </CardFooter>
    </Card>
  );
}
