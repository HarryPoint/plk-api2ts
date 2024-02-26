import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/质检管理/exportUsingPOST_42
*/
export default function fetchMethod(options: { data: IInspectionTaskSearchesForVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityStorageTask/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务搜索VO */
export interface IInspectionTaskSearchesForVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 检验日期查询开始时间 */
    completeStartTime?: string;
    /** 质检分类 */
    qualityInspectionCategoryId?: number;
    /** 采购收货单编号 */
    purchaseWorkOrderNo?: string;
    /** 任务类型 */
    taskType?: EInspectionTaskSearchesForVO_taskType;
    /** 任务编号 */
    qualityStorageTaskNo?: string;
    /** 检验日期查询结束时间 */
    completeEndTime?: string;
    /** 检验员id */
    handleUserId?: number;
    /** 检验位置id */
    checkPositionId?: number;
    /** 仓位id */
    qualityWarehouseId?: number;
    /** 物料id集 */
    materialIds?: number[];
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

export enum EInspectionTaskSearchesForVO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
