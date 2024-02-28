import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/质检统计/getPageUsingPOST_22
*/
export default function fetchMethod(options: { data: IScrapDataSheetSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationGoodScrapDataTableResultVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityGoodScrapReport/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 良品报废数据表搜索VO */
export interface IScrapDataSheetSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 物料id */
    materialId?: string;
    /** 物料种类 */
    materialType?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«良品报废数据表结果VO»» */
export interface IJSONResultPagingInformationGoodScrapDataTableResultVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationGoodScrapDataTableResultsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«良品报废数据表结果VO» */
export interface IPagingInformationGoodScrapDataTableResultsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IGoodProductScrapDataTableResultsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationGoodScrapDataTableResultsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationGoodScrapDataTableResultsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 良品报废数据表结果VO */
export interface IGoodProductScrapDataTableResultsVO {
    /** 物料id */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料种类 */
    materialType?: string;
    /** 规格 */
    materialSpec?: string;
    /** 毛品数量 */
    grossQuantity?: number;
    /** 合格品数量 */
    passQuantity?: number;
    /** 良品率 */
    goodRate?: number;
    /** 不合格数量 */
    notPassQuantity?: number;
    /** 让步接收数量 */
    concessionQuantity?: number;
    /** 返工数量 */
    backQuantity?: number;
    /** 暂扣数量 */
    holdPauseQuantity?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 报废类型数据 */
    scrapValueList?: IIdValueVO[];
}
/** Id，值VO */
export interface IIdValueVO {
    /** id */
    id: string;
    /** 值 */
    value: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationGoodScrapDataTableResultsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationGoodScrapDataTableResultsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
