new BT.Plugin({
    name: 'Collapse right sidebar items',
    description: 'jsp',
    plugin: () => {
        setTimeout(() => {
            const sidebarItems = document.querySelectorAll('h2.css-4rbku5.css-1dbjc4n.r-18u37iz');
            
            sidebarItems.forEach(item => {
                const collapseButton = document.createElement('div');
                collapseButton.setAttribute('aria-label', 'Collapse');
                collapseButton.setAttribute('role', 'button');
                collapseButton.setAttribute('tabindex', '0');
                collapseButton.className = 'css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-2yi16 r-1qi8awa r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr';
                collapseButton.addEventListener('mouseenter', () => collapseButton.className = 'css-18t94o4 css-1dbjc4n r-pjtv4k r-42olwf r-sdzlij r-1phboty r-rs99b7 r-2yi16 r-1qi8awa r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr');
                collapseButton.addEventListener('mouseleave', () => collapseButton.className = 'css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-2yi16 r-1qi8awa r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr');

                const collapseButtonContainer = document.createElement('div');
                collapseButtonContainer.setAttribute('dir', 'auto');
                collapseButtonContainer.style.color = 'rgb(239, 243, 244)';
                collapseButtonContainer.className = 'css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0';
                collapseButtonContainer.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>`;

                collapseButton.appendChild(collapseButtonContainer);
                collapseButton.addEventListener('click', (e) => {
                    if (
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).getAttribute('aria-expanded') === 'true' || (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).getAttribute('aria-expanded') === null
                    ) {
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement
                        )
                            .querySelectorAll('*:not(.css-1dbjc4n.r-1wtj0ep.r-1ny4l3l.r-ymttw5.r-1f1sjgu):not(.css-1dbjc4n.r-1wtj0ep.r-1ny4l3l.r-ymttw5.r-1f1sjgu *)')
                            .forEach(item => item.style.display = 'none');
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).classList.remove('r-1bro5k0');
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).setAttribute('aria-expanded', 'false');
                        collapseButtonContainer.querySelector('svg').style.transform = 'rotate(180deg)';
                    } else {
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement
                        )
                            .querySelectorAll('*:not(.css-1dbjc4n.r-1wtj0ep.r-1ny4l3l.r-ymttw5.r-1f1sjgu):not(.css-1dbjc4n.r-1wtj0ep.r-1ny4l3l.r-ymttw5.r-1f1sjgu *)')
                            .forEach(item => item.style.display = '');
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).classList.add('r-1bro5k0');
                        (e.target.tagName === 'path' ?
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement :
                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        ).setAttribute('aria-expanded', 'true');
                        collapseButtonContainer.querySelector('svg').style.transform = '';
                    }
                });
                item.appendChild(collapseButton);
            });
        }, 1500);
    }
});
