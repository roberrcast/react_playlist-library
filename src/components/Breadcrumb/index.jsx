import React from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import {
    BreadcrumbNav,
    BreadcrumbItem,
    BreadcrumbSeparator,
} from "./styles.js";

const Breadcrumb = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q");
    const albumId = searchParams.get("album");
    const albumName = searchParams.get("albumName");
    const albumArt = searchParams.get("albumArt");
    const songName = searchParams.get("track");

    if (!query) {
        return null;
    }

    //Construimos un array de las partes del breadcrumb
    const breadCrumbParts = [];

    //La parte inicial del search query
    breadCrumbParts.push({
        text: query,
        //Esta parte estará activa sólo si no hay álbum selecto
        isActive: !albumId,
        action: () => setSearchParams({ q: query }),
    });

    //La parte del álbum
    if (albumName) {
        breadCrumbParts.push({
            text: albumName,
            //El álbum está activo sólo si hay canción seleccionada
            isActive: !songName,
            action: () =>
                setSearchParams({
                    q: query,
                    album: albumId,
                    albumName: albumName,
                    albumArt: albumArt,
                }),
        });
    }

    //La parte del track
    if (songName) {
        breadCrumbParts.push({
            text: songName,
            //El track siempre irá al último, y por ende activo
            isActive: true,
            action: null, //El último item no se puede clickar
        });
    }

    return (
        <BreadcrumbNav>
            {breadCrumbParts.map((part, index) => (
                <React.Fragment key={part.text}>
                    {/*Se añade un separador antes de cada item excepto el primero*/}
                    {index > 0 && (
                        <BreadcrumbSeparator> / </BreadcrumbSeparator>
                    )}

                    <BreadcrumbItem
                        active={part.isActive}
                        onClick={part.action}
                    >
                        {part.text}
                    </BreadcrumbItem>
                </React.Fragment>
            ))}
        </BreadcrumbNav>
    );
};

export default Breadcrumb;
