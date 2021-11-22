# Automodiv <!-- omit in toc -->

Master Git Repository for Automodiv including Backend, Frontend for Dealers and Shoppers, and DS

- [Install Instructions for Development](#install-instructions-for-development)
- [Branch Naming Conventions](#branch-naming-conventions)

## Install Instructions for Development

The install instruction are as follow:

1. Clone Repo
2. Go to each directory and make sure install.sh has execute permissions
   - Example on how to see what permissions a file has:
     - ```sh
        cd ./server
        ls -al
       ```
       This should return something like this
       ![ConsoleScreenshot](./terminal_screenshot.png)
       - if install.sh does not have the permissions -rwxr-xr-x run the following command: `chmod +x install.sh`.
       - Check this for wait.sh
3. First Time Building? Run `docker-compose build` in the root of the directory.
4. Then run `docker-compose --env-file .env up`. Consult an admin for a copy of the .env
5. If you have any issues, first `ctrl + c`, then run `docker-compose down`. Repeat steps 3 and 4.
6. Then code
7. Still having issues submit the issue to @kyleswillard or @jtamedrano with screen shots or screen record of your issue.

## Branch Naming Conventions

For now all branch naming conventions should follow this format:

{service}/{feature-description}

example: server/dealer-employees-registration
