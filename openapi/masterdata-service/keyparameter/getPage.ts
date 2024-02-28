import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/关键参数相关/getPageUsingPOST_5
*/
export default function fetchMethod(options: { data: IKeyParameterPageQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationKeyParameterPagingResponseObject>(
        {
            url: "/masterdata-service/keyparameter/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 关键参数分页查询对象 */
export interface IKeyParameterPageQueryObject {
    /** 编号 */
    code?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 所属工序id */
    processId?: string;
    /** 名称 -- 模糊查询 */
    name?: string;
    /** 所属物料id */
    materialId?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«关键参数分页响应对象»» */
export interface IJSONResultPagingInformationKeyParameterPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationKeyParameterPageResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«关键参数分页响应对象» */
export interface IPageInformationKeyParameterPageResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IKeyParameterPagingResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationKeyParameterPageResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationKeyParameterPageResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 关键参数分页响应对象 */
export interface IKeyParameterPagingResponseObject {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 关键参数编号 */
    code?: string;
    /** 关键参数名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 状态 */
    dataStatus?: number;
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

export enum EPageInformationKeyParameterPageResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationKeyParameterPageResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
