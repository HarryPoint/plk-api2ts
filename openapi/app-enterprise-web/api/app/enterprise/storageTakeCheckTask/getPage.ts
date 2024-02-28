import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/仓库盘点任务相关/getPageUsingPOST_34
*/
export default function fetchMethod(options: { data: IWarehouseInventoryTasksPageQueryObjects }, extraOptions?: any) {
    return http<IJSONResultThePageInformationWarehouseInventoryTaskReturnsTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务分页查询对象 */
export interface IWarehouseInventoryTasksPageQueryObjects {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 任务编号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseIds?: string[];
    /** 物料id */
    materialIds?: string[];
    /** 完成开始时间 yyyy-MM-dd HH:mm:ss */
    completeBeginTime?: string;
    /** 处理人id */
    handleUserIds?: string[];
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    planEndTime?: string;
    /** 状态 */
    status?: EWarehouseInventoryTasksPageQueryObjects_status;
    /** 完成结束时间 yyyy-MM-dd HH:mm:ss */
    completeEndTime?: string;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationWarehouseInventoryTaskReturnsTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓库盘点任务返回DTO» */
export interface IThePageInformationWarehouseInventoryTaskReturnsTheDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IWarehouseInventoryTaskReturnedToDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 仓库盘点任务返回DTO */
export interface IWarehouseInventoryTaskReturnedToDTO {
    /** id */
    id?: string;
    /** 盘点单号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId?: string;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 盘点范围 */
    scopeType?: EWarehouseInventoryTaskReturnedToDTO_scopeType;
    /** 盘点范围描述 */
    scopeTypeDesc?: string;
    /** 盘点物料种类(针对盘点范围是物料类型的) */
    handleMaterialTypeList?: string[];
    /** 盘点物料种类描述(针对盘点范围是物料类型的) */
    handleMaterialTypeDescList?: string[];
    /** 处理人id集合 -- 指派 */
    handleUserIdList?: string[];
    /** 处理人姓名集合 -- 指派 */
    handleUsernameList?: string[];
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 完成时间 */
    completeTime?: number;
    /** 状态 */
    status?: EWarehouseInventoryTaskReturnedToDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 初盘提交人id */
    lastHandleUserId?: string;
    /** 初盘提交人姓名 */
    lastHandleUsername?: string;
    /** 初盘完成时间 */
    lastHandleTime?: number;
    /** 核对人id */
    verifyUserId?: string;
    /** 核对提交人 */
    verifyUsername?: string;
    /** 核对完成时间 */
    verifyTime?: number;
    /** 审核人id */
    examineUserId?: string;
    /** 审核人 */
    examineUsername?: string;
    /** 审核完成时间 */
    examineTime?: number;
    /** 指定仓位数组(指定仓位类型时有值) */
    warehouseList?: IIdNameNumberVO[];
    /** 盘盈单编号 */
    inventoryProfitOrderCode?: string;
    /** 盘亏单编号 */
    inventoryLossOrderCode?: string;
    /** 盘盈单id */
    inventoryProfitOrderId?: string;
    /** 盘亏单id */
    inventoryLossOrderId?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
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

export enum EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationWarehouseInventoryTaskReturnsTheDTO_hasNextPage {
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
