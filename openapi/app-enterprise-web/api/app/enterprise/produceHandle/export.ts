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
    type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'MOVE_IN' | 'MOVE_OUT' | 'QUALITY_APPLY' | 'TASK_ISSUE' | 'PRODUCE_ENTRUST' | 'TASK_ASSIGN');
    /** 提交人id */
    createUserId?: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId?: number;
    /** 状态 */
    status?: ('CREATED' | 'SURE' | 'IGNORE' | 'RELEASE' | 'BACK' | 'HANDING' | 'ALL_HANDLE' | 'APPROVAL' | 'REFUSE' | 'REVOKE' | 'COMPLETE' | 'CANCEL');
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
    isAsc?: ('Y' | 'N');
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
