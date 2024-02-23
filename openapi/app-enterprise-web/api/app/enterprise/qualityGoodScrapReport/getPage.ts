import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/质检统计/getPageUsingPOST_22
export default function fetchMethod(data: IScrapDataSheetSearchVO) {
    return http<IJSONResultPagingInformationGoodScrapDataTableResultVO>({
        url: "/app-enterprise-web/api/app/enterprise/qualityGoodScrapReport/getPage",
        method: "post",
        data,
    });
}
// 良品报废数据表搜索VO
export interface IScrapDataSheetSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id
    materialId: number;
    // 物料种类
    materialType: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«良品报废数据表结果VO»»
export interface IJSONResultPagingInformationGoodScrapDataTableResultVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationGoodScrapDataTableResultsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«良品报废数据表结果VO»
export interface IPagingInformationGoodScrapDataTableResultsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IGoodProductScrapDataTableResultsVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 良品报废数据表结果VO
export interface IGoodProductScrapDataTableResultsVO {
    // 物料id
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料种类
    materialType: string;
    // 规格
    materialSpec: string;
    // 毛品数量
    grossQuantity: number;
    // 合格品数量
    passQuantity: number;
    // 良品率
    goodRate: number;
    // 不合格数量
    notPassQuantity: number;
    // 让步接收数量
    concessionQuantity: number;
    // 返工数量
    backQuantity: number;
    // 暂扣数量
    holdPauseQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 报废类型数据
    scrapValueList: IIdValueVO[];
}
// Id，值VO
export interface IIdValueVO {
    // id
    id: number;
    // 值
    value: number;
}
