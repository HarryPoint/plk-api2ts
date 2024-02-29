import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/addUsingPOST_2
*/
export default function fetchMethod(options: { data: ITheDataEaseMenuAddsTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/plk-uaa-service/dataEaseMenu/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单添加请求对象 */
export interface ITheDataEaseMenuAddsTheRequestObject {
    /** 企业id */
    enterpriseId?: string;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: ETheDataEaseMenuAddsTheRequestObject_isPcTerminal;
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: string;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: ETheDataEaseMenuAddsTheRequestObject_pcTerminalDisplayMode;
    /** 是否在移动端发布 */
    isMobileTerminal?: ETheDataEaseMenuAddsTheRequestObject_isMobileTerminal;
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETheDataEaseMenuAddsTheRequestObject_isPcTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheDataEaseMenuAddsTheRequestObject_pcTerminalDisplayMode {
    /** 嵌入页面 */
    EMBED_PAGE = "EMBED_PAGE",
    /** 单开页面 */
    SINGLE_PAGE = "SINGLE_PAGE"
}

export enum ETheDataEaseMenuAddsTheRequestObject_isMobileTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
