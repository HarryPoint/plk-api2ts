import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工费相关/getPageUsingPOST_6
*/
export default function fetchMethod(data: ILaborPageQueryObjectDtos, extraOptions?: any) {
    return http<IJSONResultPagingInformationPagingResponseObject>(
        {
            url: "/masterdata-service/laborCost/getPage",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 工费分页查询对象DTO */
export interface ILaborPageQueryObjectDtos {
    /** 编号 */
    code?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 所属工序id */
    processId?: number;
    /** 名称 -- 模糊查询 */
    name?: string;
    /** 所属物料id */
    materialId?: number;
    /** 状态(是否可用) */
    dataStatus?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«工费分页响应对象»» */
export interface IJSONResultPagingInformationPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationPagingResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«工费分页响应对象» */
export interface IPagingInformationPagingResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IWorkPageResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 工费分页响应对象 */
export interface IWorkPageResponseObject {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
    /** 状态 */
    dataStatus?: number;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: number;
    /** 显示字段名称 */
    showFieldValue?: string;
}
