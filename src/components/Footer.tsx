import { FC } from 'react'

export const Footer: FC = () => (
    <footer className='w-screen fixed bottom-0 border-t border-black border-solid'>
        <div className='inline-flex items-center'>
            <p>Our handles: </p>
            <div>
                <img src="" alt="" />
                <div>Twitter</div>
            </div>
            <a>
                <img src="/img/discord.jpg" alt="discord-logo" height={20} width={20}/>
                <div>Discord</div>
            </a>
        </div>
    </footer>
)