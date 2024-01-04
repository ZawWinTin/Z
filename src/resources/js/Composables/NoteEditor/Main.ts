import '@blocknote/core/style.css';

import { BlockNoteEditor } from '@blocknote/core';

import { addFormattingToolbar } from '@/Composables/NoteEditor/Components/FormattingToolbar';
import { addHyperlinkToolbar } from '@/Composables/NoteEditor/Components/HyperlinkToolbar';
import { addImageToolbar } from '@/Composables/NoteEditor/Components/ImageToolbar';
import { addSideMenu } from '@/Composables/NoteEditor/Components/SideMenu';
import { addSlashMenu } from '@/Composables/NoteEditor/Components/SlashMenu';
import { addTableHandles } from '@/Composables/NoteEditor/Components/TableHandles';

export default function initializeEditor(editorContainer: HTMLElement) {
    editorContainer.classList.add('tw-p-2');
    const dialog = editorContainer.closest('.p-dialog') as HTMLElement;

    const editor = BlockNoteEditor.create({
        parentElement: editorContainer,
        onEditorContentChange: () => {
            // console.log(editor.topLevelBlocks);
        },
        domAttributes: {
            editor: {
                class: 'tw-outline-none',
            },
            blockContainer: {
                class: '',
            },
            blockGroup: {
                class: '',
            },
            blockContent: {
                class: '',
            },
            inlineContent: {
                class: 'before:main-text-for-input before:!tw-text-opacity-60',
            },
        },
    });

    addFormattingToolbar(editor, editorContainer, dialog);
    addHyperlinkToolbar(editor, editorContainer, dialog);
    addImageToolbar(editor, editorContainer, dialog);
    addSideMenu(editor, editorContainer, dialog);
    addSlashMenu(editor, editorContainer, dialog);
    addTableHandles(editor, editorContainer, dialog);
}
