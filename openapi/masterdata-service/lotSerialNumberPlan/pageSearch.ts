import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/批次方案相关/pageSearchUsingPOST_1
*/
export default function fetchMethod(options: { data: IPaging5 }, extraOptions?: any) {
    return http<ILotSerialNumberPlanPageQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/lotSerialNumberPlan/pageSearch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_5 */
export interface IPaging5 {
    /** 编码匹配 */
    codeMatch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 创建用户ID列表 */
    createUserIdList?: number[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 方案名称匹配 */
    nameMatch?: string;
    /** 类型列表 */
    planTypeList?: EPaging5_planTypeList_items[];
    /** 创建时间范围的开始 */
    createTimeBegin?: string;
    /** 创建时间范围的结束 */
    createTimeEnd?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«LotSerialNumberPlanPageQueryResponseDTO»» */
export interface ILotSerialNumberPlanPageQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationLotSerialNumberPlanPageQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«LotSerialNumberPlanPageQueryResponseDTO» */
export interface IThePagingInformationLotSerialNumberPlanPageQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ILotSerialNumberPlanPageQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationLotSerialNumberPlanPageQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationLotSerialNumberPlanPageQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** LotSerialNumberPlanPageQueryResponseDTO */
export interface ILotSerialNumberPlanPageQueryResponseDTO {
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
    /** undefined */
    id?: number;
    /** 编码 */
    code?: string;
    /** 方案名称 */
    name?: string;
    /** 类型 */
    planType?: ELotSerialNumberPlanPageQueryResponseDTO_planType;
    /** 规则描述 */
    ruleDesc?: string;
}

export enum EPaging5_planTypeList_items {
    SERIAL_NO = "SERIAL_NO",
    BATCH_NO = "BATCH_NO"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationLotSerialNumberPlanPageQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationLotSerialNumberPlanPageQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ELotSerialNumberPlanPageQueryResponseDTO_planType {
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 批次号 */
    BATCH_NO = "BATCH_NO"
}
