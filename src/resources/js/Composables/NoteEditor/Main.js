import { BlockNoteEditor } from '@blocknote/core';
import { addHyperlinkToolbar } from '@/Composables/NoteEditor/UI/AddHyperlinkToolbar';
import { addSideMenu } from '@/Composables/NoteEditor/UI/AddSideMenu';
import { addSlashMenu } from '@/Composables/NoteEditor/UI/AddSlashMenu';

export default function initializeEditor(editorContainer) {
    editorContainer.classList.add('tw-px-16', 'tw-py-2');
    const dialog = editorContainer.closest('.p-dialog');

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
                class: '',
            },
        },
    });

    addSideMenu(editor, editorContainer, dialog);
    addSlashMenu(editor, editorContainer, dialog);
    addHyperlinkToolbar(editor, editorContainer, dialog);
}
