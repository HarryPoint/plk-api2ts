import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/getPageUsingPOST_34
*/
export default function fetchMethod(options: { data: IWarehouseInventoryTasksPageQueryObjects }, extraOptions?: any) {
    return http<IJSONResultThePageInformationWarehouseInventoryTaskReturnsTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getPage",
            method: "post",
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
    storehouseIds?: number[];
    /** 物料id */
    materialIds?: number[];
    /** 完成开始时间 yyyy-MM-dd HH:mm:ss */
    completeBeginTime?: string;
    /** 处理人id */
    handleUserIds?: number[];
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    planEndTime?: string;
    /** 状态 */
    status?: ('WAIT' | 'HANDLING' | 'WAIT_VERIFY' | 'WAIT_EXAMINE' | 'COMPLETE' | 'CANCEL' | 'CLOSE');
    /** 完成结束时间 yyyy-MM-dd HH:mm:ss */
    completeEndTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«仓库盘点任务返回DTO» */
export interface IThePageInformationWarehouseInventoryTaskReturnsTheDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IWarehouseInventoryTaskReturnedToDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 仓库盘点任务返回DTO */
export interface IWarehouseInventoryTaskReturnedToDTO {
    /** id */
    id?: number;
    /** 盘点单号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId?: number;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 盘点范围 */
    scopeType?: ('APPOINT' | 'MATERIAL_TYPE' | 'ALL');
    /** 盘点范围描述 */
    scopeTypeDesc?: string;
    /** 盘点物料种类(针对盘点范围是物料类型的) */
    handleMaterialTypeList?: string[];
    /** 盘点物料种类描述(针对盘点范围是物料类型的) */
    handleMaterialTypeDescList?: string[];
    /** 处理人id集合 -- 指派 */
    handleUserIdList?: number[];
    /** 处理人姓名集合 -- 指派 */
    handleUsernameList?: string[];
    /** 计划开始时间 */
    planBeginTime?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 状态 */
    status?: ('WAIT' | 'HANDLING' | 'WAIT_VERIFY' | 'WAIT_EXAMINE' | 'COMPLETE' | 'CANCEL' | 'CLOSE');
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 初盘提交人id */
    lastHandleUserId?: number;
    /** 初盘提交人姓名 */
    lastHandleUsername?: string;
    /** 初盘完成时间 */
    lastHandleTime?: string;
    /** 核对人id */
    verifyUserId?: number;
    /** 核对提交人 */
    verifyUsername?: string;
    /** 核对完成时间 */
    verifyTime?: string;
    /** 审核人id */
    examineUserId?: number;
    /** 审核人 */
    examineUsername?: string;
    /** 审核完成时间 */
    examineTime?: string;
    /** 指定仓位数组(指定仓位类型时有值) */
    warehouseList?: IIdNameNumberVO[];
    /** 盘盈单编号 */
    inventoryProfitOrderCode?: string;
    /** 盘亏单编号 */
    inventoryLossOrderCode?: string;
    /** 盘盈单id */
    inventoryProfitOrderId?: number;
    /** 盘亏单id */
    inventoryLossOrderId?: number;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
