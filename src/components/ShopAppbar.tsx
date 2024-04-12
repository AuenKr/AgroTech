import { AppbarBtn } from "./AppbarBtn";

export function ShopAppbar() {
    return (
        <div className="flex justify-between">
            <div className="flex space-x-2 p-2 hover:text-green-500 active:text-green-700">
                <svg width="20" height="20" viewBox="0 0 32 32">
                    <path
                        d="M19.199 28.262h-6.403v-10.398l-10.661-14.126h27.731l-10.667 14.126v10.398zM13.862 27.196h4.271v-9.688l9.592-12.703h-23.449l9.586 12.703v9.688z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span>Filter</span>
            </div>
            <div className="flex space-x-2 p-2 hover:text-green-500 active:text-green-700">
                <span>Sort By</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M6.5 19.7499C6.31 19.7499 6.12 19.6799 5.97 19.5299L3.47 17.0299C3.18 16.7399 3.18 16.2599 3.47 15.9699C3.76 15.6799 4.24 15.6799 4.53 15.9699L6.5 17.9399L8.47 15.9699C8.76 15.6799 9.24 15.6799 9.53 15.9699C9.82 16.2599 9.82 16.7399 9.53 17.0299L7.03 19.5299C6.88 19.6799 6.69 19.7499 6.5 19.7499Z"
                        fill="currentColor"
                    />
                    <path
                        d="M6.5 19.75C6.09 19.75 5.75 19.41 5.75 19V5C5.75 4.59 6.09 4.25 6.5 4.25C6.91 4.25 7.25 4.59 7.25 5V19C7.25 19.41 6.91 19.75 6.5 19.75Z"
                        fill="currentColor"
                    />
                    <path
                        d="M20 8.25H12C11.59 8.25 11.25 7.91 11.25 7.5C11.25 7.09 11.59 6.75 12 6.75H20C20.41 6.75 20.75 7.09 20.75 7.5C20.75 7.91 20.41 8.25 20 8.25Z"
                        fill="currentColor"
                    />
                    <path
                        d="M16 14.25H12C11.59 14.25 11.25 13.91 11.25 13.5C11.25 13.09 11.59 12.75 12 12.75H16C16.41 12.75 16.75 13.09 16.75 13.5C16.75 13.91 16.41 14.25 16 14.25Z"
                        fill="currentColor"
                    />
                    <path
                        d="M14 17.25H12C11.59 17.25 11.25 16.91 11.25 16.5C11.25 16.09 11.59 15.75 12 15.75H14C14.41 15.75 14.75 16.09 14.75 16.5C14.75 16.91 14.41 17.25 14 17.25Z"
                        fill="currentColor"
                    />
                    <path
                        d="M18 11.25H12C11.59 11.25 11.25 10.91 11.25 10.5C11.25 10.09 11.59 9.75 12 9.75H18C18.41 9.75 18.75 10.09 18.75 10.5C18.75 10.91 18.41 11.25 18 11.25Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div>
    );
}
