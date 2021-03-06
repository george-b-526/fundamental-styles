import '../../dist/form-label.css';
import '../../dist/switch.css';
import * as stories from './switch.stories.js';

export default {
    title: 'Visual/Switch'
};

export const Switch = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
