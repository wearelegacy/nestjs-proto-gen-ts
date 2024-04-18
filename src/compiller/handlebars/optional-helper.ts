import { registerHelper } from 'handlebars';

registerHelper('optional', function (field) {
    const isOptional = field.parent?.oneofs?.[`_${field.name}`] || field.partOf;
    return isOptional ? '?' : '';
});
