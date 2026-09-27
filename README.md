<p align="center">
<img src="./public/logo_full.svg" alt="Scoutr" style="margin: 20px 0;">
</p>
<p align="center">
<a href="./LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/unraidr6/scoutr"></a>
</p>

**Scoutr** is the scout for your media library — a self-hosted request manager for [Jellyfin](https://jellyfin.org), [Plex](https://plex.tv), and [Emby](https://emby.media/). It integrates with your existing services, such as **[Sonarr](https://sonarr.tv/)** and **[Radarr](https://radarr.video/)**.

Scoutr is a personal, rebranded fork of [Seerr](https://github.com/seerr-team/seerr) (itself descended from Overseerr and Jellyseerr), running on PostgreSQL by default instead of SQLite. All credit for the underlying application goes to the Seerr, Jellyseerr, and Overseerr teams and contributors — see [LICENSE](./LICENSE).

## Current Features

- Full Jellyfin/Emby/Plex integration including authentication with user import & management.
- Defaults to **PostgreSQL**; **SQLite** is still supported (see `compose.sqlite.yaml`).
- Supports Movies, Shows and Mixed Libraries.
- Ability to change email addresses for SMTP purposes.
- Easy integration with your existing services. Currently supports Sonarr and Radarr.
- Jellyfin/Emby/Plex library scan, to keep track of the titles which are already available.
- Customizable request system, which allows users to request individual seasons or movies in a friendly, easy-to-use interface.
- Incredibly simple request management UI. Don't dig through the app to simply approve recent requests!
- Granular permission system.
- Support for various notification agents.
- Mobile-friendly design, for when you need to approve requests on the go!
- Support for watchlisting & blocklisting media.

## Getting Started

Scoutr is a straight reskin of Seerr, so [Seerr's own documentation](https://docs.seerr.dev/getting-started/) covers setup, configuration, and usage — only the name, look, and default database differ here.

To run Scoutr with the bundled Postgres container:

```
docker compose up -d
```

To run it on SQLite instead:

```
docker compose -f compose.sqlite.yaml up -d
```

## Preview

<img src="./public/preview.jpg" alt="Scoutr application preview" />

## API Documentation

You can access the API documentation from your local Scoutr install at http://localhost:5055/api-docs

## Contributing

This is a personal fork maintained for one instance, not an active open-source project. Issues and PRs against upstream Seerr belong in the [Seerr repository](https://github.com/seerr-team/seerr).
