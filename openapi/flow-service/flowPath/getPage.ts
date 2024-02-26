import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getPageUsingPOST
*/
export default function fetchMethod(data: IProcessSearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFlowRespondsToVO>(
        {
            url: "/flow-service/flowPath/getPage",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 流程搜索VO */
export interface IProcessSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 是否是系统应用 */
    isSystem?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态 */
    dataStatus?: number[];
    /** 创建时间-开始时间 */
    beginTime?: string;
    /** 创建时间-结束时间 */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«流程响应VO»» */
export interface IJSONResultPagingInformationFlowRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationFlowRespondsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«流程响应VO» */
export interface IThePagingInformationFlowRespondsToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProcessResponseVO[];
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
/** 流程响应VO */
export interface IProcessResponseVO {
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: number;
    /** 创建员工名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新员工id */
    updateUserId?: number;
    /** 最新版本流程名称 */
    lastName?: string;
    /** 更新员工名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 编号 */
    code?: string;
    /** 应用类型 */
    type?: string;
    /** 应用类型描述 */
    typeDesc?: string;
    /** 最新版本号 */
    lastVersionRank?: number;
    /** 最新版本简介 */
    lastDescription?: string;
    /** 最新发布终端值合计 */
    lastPublishTotal?: number;
    /** 是否系统级流程 */
    isSystem?: string;
    /** 系统流程类型 */
    flowPathSystemType?: string;
    /** 排序 */
    sort?: number;
    /** 发布位置 */
    publishPosition?: string;
}
