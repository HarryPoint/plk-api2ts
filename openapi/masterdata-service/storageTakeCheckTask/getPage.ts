import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/getPageUsingPOST_32
*/
export default function fetchMethod(options: { data: IWarehouseInventoryTasksPageQueryObjects, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultThePageInformationWarehouseInventoryTaskReturnsTheDTO>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务分页查询对象 */
export interface IWarehouseInventoryTasksPageQueryObjects {
    /** 完成开始时间 yyyy-MM-dd HH:mm:ss */
    completeBeginTime?: string;
    /** 完成结束时间 yyyy-MM-dd HH:mm:ss */
    completeEndTime?: string;
    /** 处理人id */
    handleUserIds?: string[];
    /** 物料id */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    planEndTime?: string;
    /** 状态 */
    status?: EWarehouseInventoryTasksPageQueryObjects_status;
    /** 盘点仓库id */
    storehouseIds?: string[];
    /** 任务编号 */
    taskNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«仓库盘点任务返回DTO»» */
export interface IJSONResultThePageInformationWarehouseInventoryTaskReturnsTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePageInformationWarehouseInventoryTaskReturnsTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓库盘点任务返回DTO» */
export interface IThePageInformationWarehouseInventoryTaskReturnsTheDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IWarehouseInventoryTaskReturnedToDTO[];
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
/** 仓库盘点任务返回DTO */
export interface IWarehouseInventoryTaskReturnedToDTO {
    /** 完成时间 */
    completeTime?: number;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 审核完成时间 */
    examineTime?: number;
    /** 审核人id */
    examineUserId?: string;
    /** 审核人 */
    examineUsername?: string;
    /** 盘点物料种类描述(针对盘点范围是物料类型的) */
    handleMaterialTypeDescList?: string[];
    /** 盘点物料种类(针对盘点范围是物料类型的) */
    handleMaterialTypeList?: string[];
    /** 处理人id集合 -- 指派 */
    handleUserIdList?: string[];
    /** 处理人姓名集合 -- 指派 */
    handleUsernameList?: string[];
    /** id */
    id?: string;
    /** 盘亏单编号 */
    inventoryLossOrderCode?: string;
    /** 盘亏单id */
    inventoryLossOrderId?: string;
    /** 盘盈单编号 */
    inventoryProfitOrderCode?: string;
    /** 盘盈单id */
    inventoryProfitOrderId?: string;
    /** 初盘完成时间 */
    lastHandleTime?: number;
    /** 初盘提交人id */
    lastHandleUserId?: string;
    /** 初盘提交人姓名 */
    lastHandleUsername?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 盘点范围 */
    scopeType?: EWarehouseInventoryTaskReturnedToDTO_scopeType;
    /** 盘点范围描述 */
    scopeTypeDesc?: string;
    /** 状态 */
    status?: EWarehouseInventoryTaskReturnedToDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 盘点仓库id */
    storehouseId?: string;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点单号 */
    taskNo?: string;
    /** 核对完成时间 */
    verifyTime?: number;
    /** 核对人id */
    verifyUserId?: string;
    /** 核对提交人 */
    verifyUsername?: string;
    /** 指定仓位数组(指定仓位类型时有值) */
    warehouseList?: IIdNameNumberVO[];
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

export enum EWarehouseInventoryTasksPageQueryObjects_status {
    /** 待盘点 */
    WAIT = "WAIT",
    /** 盘点中 */
    HANDLING = "HANDLING",
    /** 待核对 */
    WAIT_VERIFY = "WAIT_VERIFY",
    /** 待盈亏处理 */
    WAIT_EXAMINE = "WAIT_EXAMINE",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWarehouseInventoryTaskReturnedToDTO_scopeType {
    /** 指定仓位 */
    APPOINT = "APPOINT",
    /** 物料类型 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 全部物料 */
    ALL = "ALL"
}

export enum EWarehouseInventoryTaskReturnedToDTO_status {
    /** 待盘点 */
    WAIT = "WAIT",
    /** 盘点中 */
    HANDLING = "HANDLING",
    /** 待核对 */
    WAIT_VERIFY = "WAIT_VERIFY",
    /** 待盈亏处理 */
    WAIT_EXAMINE = "WAIT_EXAMINE",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
