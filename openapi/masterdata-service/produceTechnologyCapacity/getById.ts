import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产工艺产能相关/getByIdUsingGET_9
export function fetchMethod(params: { id: number }) {
    return get({
      url: "/masterdata-service/produceTechnologyCapacity/getById",
      params,
    });
}
// JSONResult«ProduceTechnologyCapacityResponseDTO»
export interface IJSONResultProduceTechnologyCapacityResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyCapacityResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyCapacityResponseDTO
export interface IProduceTechnologyCapacityResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 产能编号
    code: string;
    // 产能名称
    name: string;
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 生产耗时
    capacityProduceTime: number;
    // 生产时间单位
    capacityTimeType: string;
    // 产出数量
    capacityProduceQuantity: number;
}
