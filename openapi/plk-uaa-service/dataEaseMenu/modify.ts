import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/DataEase菜单相关/modifyUsingPOST_2
*/
export default function fetchMethod(options: { data: ITheDataEaseMenuModifiesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/plk-uaa-service/dataEaseMenu/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单修改请求对象 */
export interface ITheDataEaseMenuModifiesTheRequestObject {
    /** 企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 是否在移动端发布 */
    isMobileTerminal?: ETheDataEaseMenuModifiesTheRequestObject_isMobileTerminal;
    /** 是否在PC端发布 */
    isPcTerminal?: ETheDataEaseMenuModifiesTheRequestObject_isPcTerminal;
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: string;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: ETheDataEaseMenuModifiesTheRequestObject_pcTerminalDisplayMode;
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: string;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETheDataEaseMenuModifiesTheRequestObject_isMobileTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheDataEaseMenuModifiesTheRequestObject_isPcTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheDataEaseMenuModifiesTheRequestObject_pcTerminalDisplayMode {
    /** 嵌入页面 */
    EMBED_PAGE = "EMBED_PAGE",
    /** 单开页面 */
    SINGLE_PAGE = "SINGLE_PAGE"
}
