import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产任务相关/changeStatusUsingPOST
*/
export default function fetchMethod(options: { data: ITheProductionTaskChangesTheStatusDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTask/changeStatus",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务变更状态DTO */
export interface ITheProductionTaskChangesTheStatusDTO {
    /** id */
    id?: number;
    /** 状态 */
    status?: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: number;
    /** 备注 */
    remark?: string;
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
