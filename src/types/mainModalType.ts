export interface mainModalType {
    title: string
    type: 'text'|'anchor'
    href?: string
    setCloseWindowState: (value: boolean) => void
}