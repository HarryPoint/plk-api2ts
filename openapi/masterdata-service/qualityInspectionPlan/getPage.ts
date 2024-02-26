import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检方案/getPageUsingPOST_22
*/
export default function fetchMethod(data: IInspectionSolutionSearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultPagingInformationVOIsReturned>(
        {
            url: "/masterdata-service/qualityInspectionPlan/getPage",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 质检方案搜索VO */
export interface IInspectionSolutionSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 质检分类id */
    qualityInspectionCategoryId?: number;
    /** 物料id */
    materialId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«质检方案返回VO»» */
export interface IJSONResultPagingInformationVOIsReturned {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationTheInspectionSchemeReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«质检方案返回VO» */
export interface IPagingInformationTheInspectionSchemeReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheInspectionSolutionReturnsVO[];
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
/** 质检方案返回VO */
export interface ITheInspectionSolutionReturnsVO {
    /** id */
    id?: number;
    /** 质检方案名称 */
    name?: string;
    /** 质检方案编号 */
    code?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: number;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 物料集合 */
    materialList?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 质检项 */
    itemList?: IIdNameVO[];
    /** 版次号 */
    issueCode?: string;
    /** 附件文件id */
    attachedFileId?: number;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 质检方式 */
    type?: string;
    /** 质检方式描述 */
    typeDesc?: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料单位 */
    unit?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料规格 */
    spec?: string;
    /** 计量单位id */
    unitId?: number;
    /** 库存可使用数 */
    storageUseQuantity?: number;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
}
