BEGIN;

INSERT INTO folders (title)
VALUES 
    ('Music'),
    ('Technology'),
    ('Software Devs');

INSERT INTO notes (title, modified, content, folder_id) VALUES 
    ('Black Metal', '2016-01-16 12:00:00', 'Black metal is awesome, here is a list of good bands', '3'),
    ('Death Metal', '2016-01-16 12:00:00', 'Death metal is awesome, here is a list of good bands', '3'),
    ('Apple', '2016-01-16 12:00:00', 'Here is a list of the latest apple news', '4'),
    ('JavaScript', '2016-01-16 12:00:00', 'There are a lot of resources for software devs concerning JavaScript. Here is a list of those', '5');

COMMIT;