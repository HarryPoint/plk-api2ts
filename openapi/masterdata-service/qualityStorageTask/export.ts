import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检管理/exportUsingPOST_27
*/
export default function fetchMethod(options: { data: IInspectionTaskSearchesForVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/qualityStorageTask/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务搜索VO */
export interface IInspectionTaskSearchesForVO {
    /** 检验位置id */
    checkPositionId?: string;
    /** 检验日期查询结束时间 */
    completeEndTime?: number;
    /** 检验日期查询开始时间 */
    completeStartTime?: number;
    /** 检验员id */
    handleUserId?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 采购收货单编号 */
    purchaseWorkOrderNo?: string;
    /** 质检分类 */
    qualityInspectionCategoryId?: string;
    /** 任务编号 */
    qualityStorageTaskNo?: string;
    /** 仓位id */
    qualityWarehouseId?: string;
    /** 任务类型 */
    taskType?: EInspectionTaskSearchesForVO_taskType;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
