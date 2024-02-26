import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产事件管理相关/exportUsingPOST_31
*/
export default function fetchMethod(options: { data: IProduceObjectsThatHandlePagingQueries }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandle/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理分页查询的对象 */
export interface IProduceObjectsThatHandlePagingQueries {
    /** 当前页面 */
    pageNo?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 异常分类 */
    type?: EProduceObjectsThatHandlePagingQueries_type;
    /** 提交人id */
    createUserId?: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId?: number;
    /** 状态 */
    status?: EProduceObjectsThatHandlePagingQueries_status;
    /** 操作开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 批次号 */
    lotNo?: string;
    /** 操作结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 处理人id */
    handleUserId?: number;
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

export enum EProduceObjectsThatHandlePagingQueries_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 申请质检 */
    QUALITY_APPLY = "QUALITY_APPLY",
    /** 任务下发 */
    TASK_ISSUE = "TASK_ISSUE",
    /** 委外加工 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 任务分配 */
    TASK_ASSIGN = "TASK_ASSIGN"
}

export enum EProduceObjectsThatHandlePagingQueries_status {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
