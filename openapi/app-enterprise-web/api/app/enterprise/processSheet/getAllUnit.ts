import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工艺卡相关/getAllUnitUsingGET_1
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListIdNameVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processSheet/getAllUnit",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称VO»» */
export interface IJSONResultListIdNameVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
}
