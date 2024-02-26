import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/getDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultDataEaseMenuDetailsResponseObject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/getDetailById",
            method: "get",
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
    ts?: number;
}
/** DataEase菜单详情响应对象 */
export interface IDataEaseMenuDetailsResponseObject {
    /** id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: ('Y' | 'N');
    /** 是否在移动端发布 */
    isMobileTerminal?: ('Y' | 'N');
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: number;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: ('EMBED_PAGE' | 'SINGLE_PAGE');
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: number;
}
