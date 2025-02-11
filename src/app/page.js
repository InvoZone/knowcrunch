import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function Home() {
    return (
        <div>
            <Typography color="base2" variant="h1">
                Heading 1
            </Typography>
            <Typography color="primary.default" variant="h2">
                Heading 2
            </Typography>
            <Box sx={{ width: 400 }}>{/* <CourseCard /> */}</Box>
            <Typography color="accents.bubble1" variant="h3">
                Heading 3
            </Typography>
            <Typography color="primary.dark2" variant="h4">
                Heading 4
            </Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="titleLg">Title Large</Typography>
            <Typography variant="titleMd">Title Medium</Typography>
            <Typography variant="titleSm">Title Small</Typography>
            <Typography variant="subtitleLg">Subtitle Large</Typography>
            <Typography variant="subtitleSm">Subtitle Small</Typography>
            <Typography variant="body">Body Large</Typography>
            <Typography variant="body1">Body Small</Typography>

            <ol>
                <li>
                    Get started by editing <code>src/app/page.js</code>.
                </li>
                <li>Save and see your changes instantly.</li>
            </ol>

            <footer>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
