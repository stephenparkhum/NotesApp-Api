BEGIN;

INSERT INTO folders (title)
VALUES 
    ('Music'),
    ('Technology'),
    ('Software Devs');

INSERT INTO notes (title, content, folder_id) VALUES 
    ('Black Metal', 'Black metal is awesome, here is a list of good bands', '3'),
    ('Death Metal', 'Death metal is awesome, here is a list of good bands', '3'),
    ('Apple', 'Here is a list of the latest apple news', '4'),
    ('JavaScript', 'There are a lot of resources for software devs concerning JavaScript. Here is a list of those', '5');

COMMIT;

