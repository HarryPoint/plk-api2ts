import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓位相关/getByIdAndCheckUsingGET_2
*/
export default function fetchMethod(params: { warehouseId: string; enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultPositionVO>(
        {
            url: "/masterdata-service/warehouse/getByIdAndCheck",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«仓位VO» */
export interface IJSONResultPositionVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPositionVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 仓位VO */
export interface IPositionVO {
    /** id */
    id: number;
    /** 所属企业id */
    enterpriseId: number;
    /** 所属仓库id */
    storehouseId: number;
    /** 父级id */
    parentId: number;
    /** 仓位名称 */
    name: string;
    /** 仓位编号 */
    code: string;
    /** 是否默认仓位 - 针对整个工厂唯一默认有一个仓位，非仓库下自动创建的默认仓位 */
    isDefault: string;
    /** 仓位类型 */
    type: string;
    /** WIP类型 - WIP时有值 */
    wipType: string;
    /** 所属工艺路径id - WIP时有值 */
    routingId: number;
    /** 所属区域id */
    areaId: number;
}
