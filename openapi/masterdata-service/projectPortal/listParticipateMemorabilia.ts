import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目门户相关/listParticipateMemorabiliaUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProjectEventResponseObject1>(
        {
            url: "/masterdata-service/projectPortal/listParticipateMemorabilia",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目大事记响应对象»»_1 */
export interface IJSONResultListProjectEventResponseObject1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IItemEventResponseObject1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目大事记响应对象_1 */
export interface IItemEventResponseObject1 {
    /** 项目大事记id */
    id?: number;
    /** 项目id */
    projectId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 大事记内容 */
    content?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
}
