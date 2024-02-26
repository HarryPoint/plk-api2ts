import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/安全库存变更申请相关/getPageUsingPOST_27
*/
export default function fetchMethod(options: { data: ISecurityStockChangeRequestSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPagingInformationSecurityInventoryChangeRequestReturnedToVO>(
        {
            url: "/masterdata-service/safetyStockExchangeApply/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存变更申请搜索VO */
export interface ISecurityStockChangeRequestSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 设置类型 */
    type: ESecurityStockChangeRequestSearchVO_type;
    /** 对应业务id */
    businessId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«安全库存变更申请返回VO»» */
export interface IJSONResultPagingInformationSecurityInventoryChangeRequestReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationSecurityInventoryChangeRequestReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«安全库存变更申请返回VO» */
export interface IPagingInformationSecurityInventoryChangeRequestReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISecurityStockChangeRequestReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSecurityInventoryChangeRequestReturnedToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSecurityInventoryChangeRequestReturnedToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 安全库存变更申请返回VO */
export interface ISecurityStockChangeRequestReturnedToVO {
    /** id */
    id?: number;
    /** 申请单号 */
    applyNo?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 安全库存下限 */
    lowerLimit?: number;
    /** 安全库存上限 */
    upperLimit?: number;
    /** 采购触发下限 */
    purchaseLowerLimit?: number;
    /** 通知人集 */
    sendUsers?: IIdNameNumberVO[];
    /** 通知类型 */
    sendType?: ESecurityStockChangeRequestReturnedToVO_sendType;
    /** 通知类型描述 */
    sendTypeDesc?: string;
    /** 状态 */
    status?: ESecurityStockChangeRequestReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 审核时间 */
    examineTime?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
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

export enum ESecurityStockChangeRequestSearchVO_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationSecurityInventoryChangeRequestReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSecurityInventoryChangeRequestReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESecurityStockChangeRequestReturnedToVO_sendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum ESecurityStockChangeRequestReturnedToVO_status {
    /** 待审核 */
    WAIT_EXAMINE = "WAIT_EXAMINE",
    /** 已通过 */
    PASS = "PASS",
    /** 已拒绝 */
    REFUSE = "REFUSE"
}
