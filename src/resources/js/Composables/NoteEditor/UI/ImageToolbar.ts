import { BlockNoteEditor } from "@blocknote/core";
import { createButton, getDialogPos } from '@/Composables/NoteEditor/UI/Util';

export const addImageToolbar = (editor: BlockNoteEditor, editorContainer: HTMLElement, dialog?: HTMLElement | null) => {
    let element: HTMLElement;

    editor.imageToolbar.onUpdate(imageToolbarState => {});
};
