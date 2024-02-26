import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/modifyUsingPOST_2
*/
export default function fetchMethod(data: ITheDataEaseMenuModifiesTheRequestObject, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/plk-uaa-service/dataEaseMenu/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** DataEase菜单修改请求对象 */
export interface ITheDataEaseMenuModifiesTheRequestObject {
    /** 企业id */
    enterpriseId?: number;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: string;
    /** PC端发布路由id */
    pcTerminalPublishRouteId?: number;
    /** PC端展示方式 */
    pcTerminalDisplayMode?: string;
    /** 是否在移动端发布 */
    isMobileTerminal?: string;
    /** 移动端发布路由id */
    mobileTerminalPublishRouteId?: number;
    /** id */
    id?: number;
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
