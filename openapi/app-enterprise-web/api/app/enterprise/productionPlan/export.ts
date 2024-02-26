import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/任务下发相关/exportUsingPOST_37
*/
export default function fetchMethod(options: { data: ITaskDeliverySearchesVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/productionPlan/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 任务下发搜索VO */
export interface ITaskDeliverySearchesVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 状态 */
    status?: ETaskDeliverySearchesVO_status;
    /** 排产计划类型 */
    type?: ETaskDeliverySearchesVO_type;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 创建开始时间 yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    planEndTime?: string;
    /** 创建结束时间 yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 任务下发开始时间 yyyy-MM-dd HH:mm:ss */
    issueBeginTime?: string;
    /** 任务下发结束时间 yyyy-MM-dd HH:mm:ss */
    issueEndTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
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

export enum ETaskDeliverySearchesVO_status {
    /** 等待下发 */
    WAIT = "WAIT",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 已撤回 */
    REVOKE = "REVOKE",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum ETaskDeliverySearchesVO_type {
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
