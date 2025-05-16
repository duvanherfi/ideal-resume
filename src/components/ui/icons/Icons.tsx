import { AlertTriangle, AlignLeft, BarChart2, Download, DownloadCloud, Eraser, Eye, FileText, Folder, Globe, GraduationCap, Grid, History, Import, Layers, Mail, Menu, Moon, MoreVertical, Palette, Pen, Plus, RefreshCw, Save, Settings, Sun, Trash, Type, Undo, Upload, User, X } from "lucide-react";

export enum ChevronDirection {
    UP = "",
    RIGHT = "rotate-90",
    DOWN = "rotate-180",
    LEFT = "-rotate-90",
}

const Icons = {
    Add: Plus,
    Cross: X,
    ArrowLeft: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    ),
    Trash: Trash,
    Download: Download,
    Draw: Pen,
    ColorPicker: Palette,
    Eraser: Eraser,
    Warning: AlertTriangle,
    Menu: Menu,
    Save: Save,
    Chevron: (props: { direction?: ChevronDirection }) => {
        const direction = props.direction ?? ChevronDirection.UP;

        return (
            <svg className={`w-3 h-3 ${direction}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
        );
    },
    Linkedin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    Github: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
        </svg>
    ),
    Mail: Mail,
    Moon: Moon,
    Sun: Sun,
    LineSeparator: () => (
        <div className="flex items-center w-full py-2 mb-2">
            <div className="flex-grow border-t border-secondary-400/50 dark:border-secondary-700/50"></div>
            <div className="flex-shrink-0 mx-4 w-4 h-4 bg-accent-800/80 dark:dark:bg-accent-500/80 rounded-full"></div>
            <div className="flex-grow border-t border-secondary-400/50 dark:border-secondary-700/50"></div>
        </div>
    ),
    Person: User,
    Sheet: FileText,
    View: Eye,
    Undo: Undo,
    Briefcase: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    Academic: GraduationCap,
    Skills: BarChart2,
    Projects: Folder,
    Globe: Globe,
    Header: AlignLeft,
    Sections: Layers,
    Other: MoreVertical,
    Loading: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 50 50" stroke="currentColor">
            <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 150" strokeDashoffset="0" />
        </svg>
    ),
    Carousel: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="7" width="20" height="10" rx="2" />
            <path d="M16 7v10" />
            <path d="M8 7v10" />
        </svg>
    ),
    Grid: Grid,
    Customize: Settings,
    Text: Type,
    Upload: Upload,
    Import: Import,
    Export: DownloadCloud,
    Pick: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
        >
            <path d="M8 3v3a2 2 0 0 0 2 2h12" />
            <path d="M11 8L5.5 3 1 8" />
            <circle cx="14" cy="18" r="3" />
            <path d="M17 18a3 3 0 0 0-3-3" />
            <path d="M14 21a3 3 0 0 0 3-3" />
        </svg>
    ),
    History: History,
    Reset: RefreshCw
};

export default Icons;