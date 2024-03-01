import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/库存流水相关/getPageUsingPOST_31
*/
export default function fetchMethod(options: { data: IInventoryFlowSearchVO, params: { enterpriseId?: string; masterDataFlowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationInventoryReturnsVO>(
        {
            url: "/masterdata-service/storageLog/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 库存流水搜索VO */
export interface IInventoryFlowSearchVO {
    /** 创建部门 - 批量查询 */
    billCreateDeptIdList?: string[];
    /** 创建时间-开始 yyyy-MM-dd HH:mm:ss */
    billCreateTimeBegin?: string;
    /** 创建时间-结束 yyyy-MM-dd HH:mm:ss */
    billCreateTimeEnd?: string;
    /** 创建用户 - 批量查询 */
    billCreateUserIdList?: string[];
    /** 单据时间-开始 yyyy-MM-dd HH:mm:ss */
    billDateBegin?: string;
    /** 单据时间-结束 yyyy-MM-dd HH:mm:ss */
    billDateEnd?: string;
    /** 单据名称 - 模糊匹配 */
    billNameMatch?: string;
    /** 单据编号 - 模糊匹配 */
    businessNoMatch?: string;
    /** 业务状态 - 批量查询 */
    businessStatusList?: EInventoryFlowSearchVO_businessStatusList_items[];
    /** 流程id(工单类型) */
    flowPathId?: string;
    /** 收入数量-开始 */
    inQuantityBegin?: number;
    /** 收入数量-结束 */
    inQuantityEnd?: number;
    /** 批次号 */
    lotNo?: string;
    /** 业务主数据id（eg:物料id） */
    masterDataIdList?: string[];
    /** 区域ID-批量查询 */
    opAreaIdList?: string[];
    /** 操作人 - 批量查询 */
    operatorUserIdList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 发出数量-开始 */
    outQuantityBegin?: number;
    /** 发出数量-结束 */
    outQuantityEnd?: number;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 流程进度 - 模糊查询 */
    processStatusMatch?: string;
    /** 剩余量-开始 */
    storageTotalCountBegin?: number;
    /** 剩余量-结束 */
    storageTotalCountEnd?: number;
    /** 仓库ID-批量查询 */
    storehouseIdList?: string[];
    /** 计量单位ID-批量查询 */
    unitIdList?: string[];
    /** 库存更新部门ID */
    updateDeptIdList?: string[];
    /** 库存更新时间-开始 yyyy-MM-dd HH:mm:ss */
    updateTimeBegin?: string;
    /** 库存更新时间-结束 yyyy-MM-dd HH:mm:ss */
    updateTimeEnd?: string;
    /** 仓位id集 */
    warehouseIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«库存流水返回VO»» */
export interface IJSONResultPagingInformationInventoryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationInventoryFlowReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«库存流水返回VO» */
export interface IPagingInformationInventoryFlowReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationInventoryFlowReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationInventoryFlowReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IStockFlowBackToVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 库存流水返回VO */
export interface IStockFlowBackToVO {
    /** 单据创建部门ID */
    billCreateDeptId?: string;
    /** 单据创建部门名称 */
    billCreateDeptName?: string;
    /** undefined */
    billCreateTime?: number;
    /** 单据创建人 */
    billCreateUserId?: string;
    /** 单据创建人名称 */
    billCreateUserName?: string;
    /** 单据日期 */
    billDate?: number;
    /** 单据名称 */
    billName?: string;
    /** 业务id */
    businessId?: string;
    /** 业务编号(工单编号) */
    businessNo?: string;
    /** 业务状态 */
    businessStatus?: EStockFlowBackToVO_businessStatus;
    /** 业务状态描述 */
    businessStatusDesc?: string;
    /** 对应流程编号 */
    flowPathCode?: string;
    /** 对应流程id */
    flowPathId?: string;
    /** 对应流程名称 */
    flowPathName?: string;
    /** 对应流程版本id */
    flowPathVersionId?: string;
    /** 流水类型 */
    flowType?: EStockFlowBackToVO_flowType;
    /** 流水类型描述 */
    flowTypeDesc?: string;
    /** id */
    id?: string;
    /** 发入数量 */
    inQuantity?: number;
    /** 批次号 */
    lotNo?: string;
    /** 所属业务主数据id */
    masterDataId?: string;
    /** 所属物料编号 */
    materialCode?: string;
    /** 所属物料名称 */
    materialName?: string;
    /** 所属物料规格型号 */
    materialSpec?: string;
    /** 所属物料单位 */
    materialUnit?: string;
    /** 操作区域id */
    opAreaId?: string;
    /** 操作区域名称 */
    opAreaName?: string;
    /** 操作仓库id */
    opStorehouseId?: string;
    /** 仓库名称 */
    opStorehouseName?: string;
    /** 操作仓位id */
    opWarehouseId?: string;
    /** 操作库类型 */
    opWarehouseType?: EStockFlowBackToVO_opWarehouseType;
    /** 操作人ID */
    operatorUserId?: string;
    /** 操作人姓名 */
    operatorUserName?: string;
    /** 发出数量 */
    outQuantity?: number;
    /** 流程进度 */
    processStatus?: string;
    /** 数量 */
    quantity?: number;
    /** 库存剩余锁定数 */
    storageLockCount?: number;
    /** 库存剩余总数 */
    storageTotalCount?: number;
    /** 库存剩余可使用数 */
    storageUseCount?: number;
    /** 单位ID */
    unitId?: string;
    /** 单位名称 */
    unitName?: string;
    /** 库存更新部门ID */
    updateDeptId?: string;
    /** 库存更新部门名称 */
    updateDeptName?: string;
    /** 库存更新时间 */
    updateTime?: number;
    /** 操作仓位层级，从高至低排列 */
    warehouseList?: IIdNameNumberVO[];
    /** 对应工单数据id */
    workOrderDataId?: string;
    /** 对应工单id */
    workOrderId?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
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

export enum EPagingInformationInventoryFlowReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationInventoryFlowReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EStockFlowBackToVO_businessStatus {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

export enum EStockFlowBackToVO_flowType {
    /** 工单 */
    WORK_ORDER = "WORK_ORDER",
    /** 盘点 */
    TAKE_CHECK = "TAKE_CHECK"
}

export enum EStockFlowBackToVO_opWarehouseType {
    /** 实体仓 */
    PHYSICAL = "PHYSICAL",
    /** 线边仓 */
    LINE_SIDE = "LINE_SIDE",
    /** WIP */
    WIP = "WIP"
}
