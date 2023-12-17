import { BlockNoteEditor } from '@blocknote/core';
import { addFormattingToolbar } from '@/Composables/NoteEditor/UI/FormattingToolbar';
import { addHyperlinkToolbar } from '@/Composables/NoteEditor/UI/HyperlinkToolbar';
import { addImageToolbar } from '@/Composables/NoteEditor/UI/ImageToolbar';
import { addSideMenu } from '@/Composables/NoteEditor/UI/SideMenu';
import { addSlashMenu } from '@/Composables/NoteEditor/UI/SlashMenu';
import { addTableHandles } from '@/Composables/NoteEditor/UI/TableHandles';
import '@blocknote/core/style.css';

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
