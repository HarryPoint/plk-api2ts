import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/库存流水相关/exportUsingPOST_51
*/
export default function fetchMethod(options: { data: IInventoryFlowSearchVO, params: { masterDataFlowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageLog/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 库存流水搜索VO */
export interface IInventoryFlowSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 业务主数据id（eg:物料id） */
    masterDataIdList?: string[];
    /** 流程id(工单类型) */
    flowPathId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 创建时间-开始 yyyy-MM-dd HH:mm:ss */
    billCreateTimeBegin?: string;
    /** 创建时间-结束 yyyy-MM-dd HH:mm:ss */
    billCreateTimeEnd?: string;
    /** 单据名称 - 模糊匹配 */
    billNameMatch?: string;
    /** 仓位id集 */
    warehouseIds?: string[];
    /** 单据时间-开始 yyyy-MM-dd HH:mm:ss */
    billDateBegin?: string;
    /** 单据时间-结束 yyyy-MM-dd HH:mm:ss */
    billDateEnd?: string;
    /** 单据编号 - 模糊匹配 */
    businessNoMatch?: string;
    /** 仓库ID-批量查询 */
    storehouseIdList?: string[];
    /** 区域ID-批量查询 */
    opAreaIdList?: string[];
    /** 计量单位ID-批量查询 */
    unitIdList?: string[];
    /** 收入数量-开始 */
    inQuantityBegin?: number;
    /** 收入数量-结束 */
    inQuantityEnd?: number;
    /** 操作人 - 批量查询 */
    operatorUserIdList?: string[];
    /** 发出数量-开始 */
    outQuantityBegin?: number;
    /** 发出数量-结束 */
    outQuantityEnd?: number;
    /** 创建用户 - 批量查询 */
    billCreateUserIdList?: string[];
    /** 剩余量-开始 */
    storageTotalCountBegin?: number;
    /** 剩余量-结束 */
    storageTotalCountEnd?: number;
    /** 创建部门 - 批量查询 */
    billCreateDeptIdList?: string[];
    /** 业务状态 - 批量查询 */
    businessStatusList?: EInventoryFlowSearchVO_businessStatusList_items[];
    /** 库存更新时间-结束 yyyy-MM-dd HH:mm:ss */
    updateTimeEnd?: string;
    /** 流程进度 - 模糊查询 */
    processStatusMatch?: string;
    /** 库存更新部门ID */
    updateDeptIdList?: string[];
    /** 库存更新时间-开始 yyyy-MM-dd HH:mm:ss */
    updateTimeBegin?: string;
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
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EInventoryFlowSearchVO_businessStatusList_items {
    HANDLING = "HANDLING",
    COMPLETE = "COMPLETE",
    NOT_PASS = "NOT_PASS",
    STAGING = "STAGING",
    INVALID = "INVALID"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
