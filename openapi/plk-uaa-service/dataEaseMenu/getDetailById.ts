import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/DataEase菜单相关/getDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultDataEaseMenuDetailsResponseObject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«DataEase菜单详情响应对象» */
export interface IJSONResultDataEaseMenuDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataEaseMenuDetailsResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** DataEase菜单详情响应对象 */
export interface IDataEaseMenuDetailsResponseObject {
    /** id */
    id?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: EDataEaseMenuDetailsResponseObject_isPcTerminal;
    /** 是否在移动端发布 */
    isMobileTerminal?: EDataEaseMenuDetailsResponseObject_isMobileTerminal;
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: string;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: EDataEaseMenuDetailsResponseObject_pcTerminalDisplayMode;
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: string;
}

export enum EDataEaseMenuDetailsResponseObject_isPcTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataEaseMenuDetailsResponseObject_isMobileTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataEaseMenuDetailsResponseObject_pcTerminalDisplayMode {
    /** 嵌入页面 */
    EMBED_PAGE = "EMBED_PAGE",
    /** 单开页面 */
    SINGLE_PAGE = "SINGLE_PAGE"
}
