import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/addUsingPOST_2
*/
export default function fetchMethod(options: { data: ITheDataEaseMenuAddsTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/plk-uaa-service/dataEaseMenu/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单添加请求对象 */
export interface ITheDataEaseMenuAddsTheRequestObject {
    /** 企业id */
    enterpriseId?: number;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: ('Y' | 'N');
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: number;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: ('EMBED_PAGE' | 'SINGLE_PAGE');
    /** 是否在移动端发布 */
    isMobileTerminal?: ('Y' | 'N');
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: number;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
