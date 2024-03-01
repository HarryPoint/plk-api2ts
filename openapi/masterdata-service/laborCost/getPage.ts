import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工费相关/getPageUsingPOST_6
*/
export default function fetchMethod(options: { data: ILaborPageQueryObjectDtos }, extraOptions?: any) {
    return http<IJSONResultPagingInformationPagingResponseObject>(
        {
            url: "/masterdata-service/laborCost/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工费分页查询对象DTO */
export interface ILaborPageQueryObjectDtos {
    /** 编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 所属物料id */
    materialId?: string;
    /** 名称 -- 模糊查询 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 所属工序id */
    processId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工费分页响应对象»» */
export interface IJSONResultPagingInformationPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationPagingResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工费分页响应对象» */
export interface IPagingInformationPagingResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationPagingResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationPagingResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IWorkPageResponseObject[];
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
/** 工费分页响应对象 */
export interface IWorkPageResponseObject {
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 编号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: string;
    /** 显示字段名称 */
    showFieldValue?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationPagingResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationPagingResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
