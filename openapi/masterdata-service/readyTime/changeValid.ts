import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/准备期相关/changeValidUsingPOST_10
*/
export default function fetchMethod(data: IEnableOrDisableVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/readyTime/changeValid",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 启用or停用VO */
export interface IEnableOrDisableVO {
    /** id */
    id: number;
    /** 状态 */
    dataStatus: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
