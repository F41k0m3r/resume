import React, { useRef, useEffect } from "react";
import './ScrollBar.scss'
interface ScrollBarProps {
    children: React.ReactNode;
    background?: string;
    setWidth?: string;
    setHeight?: string;
}

const ScrollBar: React.FC<ScrollBarProps> = props => {
    const { children, setWidth, setHeight, background } = props;
    const scrollContainer = useRef<HTMLDivElement>(null);
    const scrollContentWrapper = useRef<HTMLDivElement>(null);
    const scrollContent = useRef<HTMLDivElement>(null);
    const scrollerY = useRef<HTMLDivElement>(null);
    const scrollerX = useRef<HTMLDivElement>(null);

    const renderStyles = {
        width: setWidth,
        height: setHeight,
        backgroundColor: background,
    };

    let contentPosition = 0;
    let scrollerBeingDragged = false;
    let topPosition;
    let leftPosition;
    let scrollerHeight;
    let scrollerWidth;
    let normalizedPositionY: number;
    let normalizedPositionX: number;

    // eslint-disable-next-line consistent-return
    function calculateScrollerHeight() {
        if (scrollContainer.current && scrollContentWrapper.current) {
            const visibleRatio =
                scrollContainer.current.offsetHeight /
                scrollContentWrapper.current.scrollHeight;
            return visibleRatio * scrollContainer.current.offsetHeight;
        }
    }

    // eslint-disable-next-line consistent-return
    function calculateScrollerWidth() {
        if (scrollContainer.current && scrollContentWrapper.current) {
            const visibleRatio =
                scrollContainer.current.offsetWidth /
                scrollContentWrapper.current.scrollWidth;
            return visibleRatio * scrollContainer.current.offsetWidth;
        }
    }

    function moveScroller(e: {
        target: { scrollTop: number; scrollLeft: number };
    }) {
        if (
            scrollContentWrapper.current &&
            scrollContainer.current &&
            scrollerY.current
        ) {
            const scrollPercentage =
                e.target.scrollTop / scrollContentWrapper.current.scrollHeight;
            topPosition =
                scrollPercentage * (scrollContainer.current.offsetHeight - 5);
            scrollerY.current.style.top = `${topPosition}px`;
        }

        if (
            scrollContentWrapper.current &&
            scrollContainer.current &&
            scrollerX.current
        ) {
            const scrollPercentage =
                e.target.scrollLeft / scrollContentWrapper.current.scrollWidth;
            leftPosition =
                scrollPercentage * (scrollContainer.current.offsetWidth - 5);
            scrollerX.current.style.left = `${leftPosition}px`;
        }
    }

    function startDragVertical(e: { pageY: number }) {
        normalizedPositionY = e.pageY;
        if (scrollContentWrapper.current)
            contentPosition = scrollContentWrapper.current.scrollTop;
        scrollerBeingDragged = true;
    }

    function startDragHorizontal(e: { pageX: number }) {
        normalizedPositionX = e.pageX;
        if (scrollContentWrapper.current)
            contentPosition = scrollContentWrapper.current.scrollLeft;
        scrollerBeingDragged = true;
    }

    function stopDrag() {
        scrollerBeingDragged = false;
    }

    function scrollBarVertical(e: MouseEvent) {
        if (
            scrollerBeingDragged && scrollContentWrapper.current &&
            scrollContainer.current
        ) {
            const mouseDifferential = e.pageY - normalizedPositionY;
            const scrollEquivalent =
                mouseDifferential *
                (scrollContentWrapper.current.scrollHeight /
                    scrollContainer.current.offsetHeight);
            scrollContentWrapper.current.scrollTop =
                contentPosition + scrollEquivalent;
        }
    }

    function scrollBarHorizontal(e: MouseEvent) {
        if (
            scrollerBeingDragged && scrollContentWrapper.current &&
            scrollContainer.current
        ) {
            const mouseDifferential = e.pageX - normalizedPositionX;
            const scrollEquivalent =
                mouseDifferential *
                (scrollContentWrapper.current.scrollWidth /
                    scrollContainer.current.offsetWidth);
            scrollContentWrapper.current.scrollLeft =
                contentPosition + scrollEquivalent;
        }
    }

    function handleScrollVertical() {
        scrollerHeight = calculateScrollerHeight();

        if (
            scrollerHeight &&
            scrollerY.current &&
            scrollContainer.current &&
            scrollerHeight / scrollContainer.current.offsetHeight < 1
        ) {
            scrollerY.current.style.height = `${scrollerHeight}px`;
            scrollerY.current.addEventListener('mousedown', startDragVertical);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarVertical);
            window.addEventListener('resize', calculateScrollerHeight);
        }

        if (
            scrollerHeight &&
            scrollerY.current &&
            scrollContainer.current &&
            scrollerHeight / scrollContainer.current.offsetHeight >= 1
        ) {
            scrollerY.current.style.height = `0px`;
        }
    }

    function handleScrollHorizontal() {
        scrollerWidth = calculateScrollerWidth();

        if (
            scrollerWidth &&
            scrollerX.current &&
            scrollContainer.current &&
            scrollerWidth / scrollContainer.current.offsetWidth < 1
        ) {
            scrollerX.current.style.width = `${scrollerWidth}px`;
            scrollerX.current.addEventListener('mousedown', startDragHorizontal);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarHorizontal);
            window.addEventListener('resize', calculateScrollerWidth);
        }

        if (
            scrollerWidth &&
            scrollerX.current &&
            scrollContainer.current &&
            scrollerWidth / scrollContainer.current.offsetWidth >= 1
        ) {
            scrollerX.current.style.height = `0px`;
        }
    }

    useEffect(() => {
        handleScrollVertical();
        scrollContainer.current?.addEventListener(
            'mouseenter',
            handleScrollVertical,
        );

        handleScrollHorizontal();
        scrollContainer.current?.addEventListener(
            'mouseenter',
            handleScrollHorizontal,
        );

        scrollContentWrapper.current?.addEventListener(
            'scroll',
            moveScroller as any,
        );
    });

    return (
        <div
            className={'scrollbar'}
            style={renderStyles}
            ref={scrollContainer}
        >
            <div
                className={'scrollbar__wrapper'}
                ref={scrollContentWrapper}
            >
                <div className={'scrollbar__content'} ref={scrollContent}>
                    {children}
                </div>
            </div>
            <div className={'scrollbar__scrollerY'} ref={scrollerY} />
            <div className={'scrollbar__scrollerX'} ref={scrollerX} />
        </div>
    );
};

export default ScrollBar;
